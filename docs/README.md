# Recipe Database

[Click to visit the site.](https://www.google.com/)

`Recipe Database` (RD) stores and displays user-entered recipes.
<br>
<br>

## Usage

1. Post to `/user` to create and get your user ID
1. Request `/recipe` to see all recipes
1. Post to `/recipe` to add a recipe associated with your user ID

## Endpoints

GET `http://site.com/user` - Returns all users in the database (excludes associated passwords)<br>
POST `http://site.com/user` - Create a new user<br>
GET `http://site.com/user/<id>` - Returns specific user's account details (excluding password)<br>
DELETE `http://site.com/user/<id>` - Delete a specific user<br>
PUT `http://site.com/user/<id>` - Updates a specific user's account details<br>

GET `http://site.com/recipe` - Returns all stored recipe titles<br>
POST `http://site.com/recipe` - Submits form with recipe details to the database<br>
GET `http://site.com/recipe/<id>` - Returns specific recipe's details<br>
DELETE `http://site.com/recipe/<id>` - Delete a specific recipe<br>
PUT `http://site.com/recipe/<id>` - Update a specific recipe<br>

## Examples

GET `http://site.com/recipe`

```javascript
{
    "allRecipes": [
        {
            "_id": "608a34530141c496e86440de",
            "title": "test recipe 1",
            "ingredients": "ingredient 1, ingredient 2",
            "method": "step 1, step 2",
            "author": "608a2f603e53ef93f3845970",
            "__v": 0
        },
        {
            "_id": "608a3487ed9a17972dc98e4f",
            "title": "test recipe 1",
            "ingredients": "ingredient 1, ingredient 2",
            "method": "step 1, step 2",
            "author": "608a30703cb2b09453f7d8c3",
            "__v": 0
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
        'recipes': ['Chili de Jackie', '']
    }
}
```
