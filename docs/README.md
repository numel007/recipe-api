# Recipe Database

[Click to visit the site.](https://bew-recipe-api.herokuapp.com/)

`Recipe Database` (RD) stores and displays user-entered recipes.
<br>
<br>

## Usage

1. Post to `/users` to create an account
1. Get `/users` to find account \_id
1. Request `/recipes` to see all recipes
1. Post to `/recipes` to add a recipe associated with your user \_id

## Endpoints

GET `https://bew-recipe-api.herokuapp.com/users` - Returns all users in the database (excludes associated passwords)<br>
POST `https://bew-recipe-api.herokuapp.com/users` - Create a new user<br>
GET `https://bew-recipe-api.herokuapp.com/users/<id>` - Returns specific user's account details (excluding password)<br>
DELETE `https://bew-recipe-api.herokuapp.com/users/<id>` - Delete a specific user<br>
PUT `https://bew-recipe-api.herokuapp.com/users/<id>` - Updates a specific user's account details<br>

GET `https://bew-recipe-api.herokuapp.com/recipes` - Returns all stored recipe titles<br>
POST `https://bew-recipe-api.herokuapp.com/recipes` - Submits form with recipe details to the database<br>
GET `https://bew-recipe-api.herokuapp.com/recipes/<id>` - Returns specific recipe's details<br>
DELETE `https://bew-recipe-api.herokuapp.com/recipes/<id>` - Delete a specific recipe<br>
PUT `https://bew-recipe-api.herokuapp.com/recipes/<id>` - Update a specific recipe<br>

## Examples

GET `https://bew-recipe-api.herokuapp.com/recipe`

```javascript
{
    "allRecipes": [
        {
            "_id": "608a34530141c496e86440de",
            "title": "test recipe 1",
            "ingredients": "ingredient 1, ingredient 2",
            "method": "step 1, step 2",
            "author": "608a2f603e53ef93f3845970",
        },
        {
            "_id": "608a3487ed9a17972dc98e4f",
            "title": "test recipe 1",
            "ingredients": "ingredient 1, ingredient 2",
            "method": "step 1, step 2",
            "author": "608a30703cb2b09453f7d8c3",
        },
        ...
    ]
}
```

GET `http://site.com/recipe/<id>`

```javascript
{
    'name': 'Chili de Jackie',
    'ingredients': ['1 can of chili from Target'],
    'method': ['Open the can', 'Eat what\'s inside the can.'],
    'author': {
        'username': 'user1',
        'recipes': ['Chili de Jackie']
    }
}
```
