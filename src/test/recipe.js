require("dotenv").config();
const app = require("../server.js");
const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");

const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe("Recipe API tests", () => {
  beforeEach((done) => {
    const newUser = new User({
      username: "newUser1",
      password: "password",
    });
    const newRecipe = new Recipe({
      title: "newRecipe1",
      ingredients: "newIngredients1",
      method: "newMethod1",
    });

    newUser
      .save()
      .then(() => {
        newRecipe.author = newUser;
        return newRecipe.save();
      })
      .then(() => {
        return User.findOne({ username: "newUser1" });
      })
      .then((user) => {
        user.recipes.push(newRecipe);
        user.save();
        done();
      });
  });

  afterEach((done) => {
    User.deleteMany({ username: ["newUser1", "newUser2"] })
      .then(() => {
        Recipe.deleteMany({ title: ["newRecipe1", "newRecipe2"] });
        done();
      })
      .catch((err) => {
        throw err.message;
      });
  });

  it("Should load all recipes", (done) => {
    chai
      .request(app)
      .get("/recipes")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res).to.have.status(200);
        expect(res.body.allRecipes).to.be.an("array");
        done();
      });
  });

  it("Should create newRecipe2", (done) => {
    User.findOne({ username: "newUser1" }).then((user) => {
      chai
        .request(app)
        .post("/recipes")
        .send({
          title: "newRecipe2",
          ingredients: "newIngredients2",
          method: "newMethod2",
          author: user,
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.message).to.be.equal("newRecipe2 added.");
          done();
        });
    });
  });

  it("Should get newRecipe1", (done) => {
    Recipe.findOne({ title: "newRecipe1" }).then((recipe) => {
      chai
        .request(app)
        .get(`/recipes/${recipe._id}`)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.foundRecipe.title).to.equal("newRecipe1");
          done();
        });
    });
  });

  it("Should update newRecipe1 title to newRecipe3", (done) => {
    Recipe.findOne({ title: "newRecipe1" }).then((recipe) => {
      chai
        .request(app)
        .put(`/recipes/${recipe._id}`)
        .send({
          title: "newRecipe3",
          ingredients: "newIngredients3",
          method: "newMethod3",
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.message).to.equal("Recipe updated.");
          expect(res.body.title).to.be.equal("newRecipe1 -> newRecipe3");
          done();
        });
    });
  });

  it("Should delete newRecipe1", (done) => {
    Recipe.findOne({ title: "newRecipe1" }).then((recipe) => {
      chai
        .request(app)
        .delete(`/recipes/${recipe._id}`)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.message).to.equal("Recipe deleted.");
          done();
        });
    });
  });
});
