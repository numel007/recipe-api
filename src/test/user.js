require("dotenv").config();
const app = require("../server.js");
const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");

const User = require("../models/user.js");

const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});
describe("User API Tests", () => {
  beforeEach((done) => {
    const newUser = new User({
      username: "newUser1",
      password: "password",
    });
    newUser.save().then(() => {
      done();
    });
  });

  afterEach((done) => {
    User.deleteMany({ username: ["newUser1", "newUser2"] }).then(() => {
      done();
    });
  });

  it("Should get all users", (done) => {
    chai
      .request(app)
      .get("/users")
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res).to.have.status(200);
          expect(res.body.allUsers).to.be.an.an("array");
          done();
        }
      });
  });

  it("Should get newUser1", (done) => {
    user = User.findOne({ username: "newUser1" }).then((user) => {
      chai
        .request(app)
        .get(`/users/${user._id}`)
        .end((err, res) => {
          if (err) {
            done(err);
          } else {
            expect(res).to.have.status(200);
            expect(res.body.foundUser.username).to.equal("newUser1");
            done();
          }
        });
    });
  });

  it("Should create newUser2", (done) => {
    const user2 = new User({
      username: "newUser2",
      password: "password2",
    });

    chai
      .request(app)
      .post("/users")
      .send(user2)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.username).to.equal("newUser2");
        done();
      });
  });

  it("Should update newUser1 username into newUserUpdated", (done) => {
    user = User.findOne({ username: "newUser1" }).then((user) => {
      chai
        .request(app)
        .put(`/users/${user._id}`)
        .send({ username: "newUserUpdated" })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.updatedUser.username).to.be.equal("newUserUpdated");
          done();
        });
    });
  });

  it("Should delete a user", (done) => {
    user = User.findOne({ username: "newUser1" }).then((user) => {
      chai
        .request(app)
        .delete(`/users/${user._id}`)
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res.body.message).to.be.equal("User deleted.");
          done();
        });
    });
  });
});
