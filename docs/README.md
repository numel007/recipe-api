# Recipe Database

[Click to visit the site.](https://www.google.com/)

`Recipe Database` (RD) stores and displays user-entered recipes.
<br>
<br>

## Usage

1. Navigate to /recipe to see all recipes
1. Navigate to /recipe/new
1. Fill out the boxes with the recipe's name, ingredients, and instructions.
1. Click submit

## Endpoints

GET `http://site.com/recipe` - Returns all stored recipe titles<br>
POST `http://site.com/recipe` - Submits form with recipe details to the database<br>
GET `http://site.com/recipe/<id>` - Returns specific recipe's details<br>
DELETE `http://site.com/recipe/<id>` - Delete specific recipe<br>
PUT `http://site.com/recipe/<id>` - Update specific recipe<br>

## Examples

GET `http://site.com/recipe`

```javascript
{
    'name': 'Chili de Jackie',
    'category': 'Texmex'
},
{
    'name': 'Ben\'s Tiramisu',
    'category': 'Dessert'
}
```

GET `http://site.com/recipe/<id>`

```javascript
{
    'name': 'Chili de Jackie',
    'category': 'Texmex',
    'ingredients': ['1 can of chili from Target'],
    'method': ['Open the can', 'Eat what\'s inside the can.'],
    'timestamp': '04-27-21 05:29:46 UTC'
}
```
