![havanas logo](./client/public/images/linkedin_banner_image_2.png)

## Quick Start

#### Application live at

<http://ec2-3-101-37-166.us-west-1.compute.amazonaws.com/>

#### To run locally

Clone repo

From the root directory

- `npm install`

From the client directory

- `npm install`

##### Starting the app

From the root directory

- `npm run dev`

### Notes

So much more I wanted to add as this was super fun!

Some minor notes:

- I decided to incorporate Redux for state management. This is prob overkill for an app this size however, I felt it would give large performance gains and would make things easier to scale if more items/products need to be added.

- I used MongoDb instead of Postgres. My reasoning was ease of use and MongoDb Atlas' free tier cloud option. If I had more time I would have preferred to use Postgres as it commands much faster performance.

- Things I wanted to add but could not for the sake of time

  - Full sign in/register functionality
  - Refactor of UI with a library like Material UI or Bootstrap
  - Explore using Shopify as a backend instead of Node/express
    - Analyze cost of service vs developer time ratio
  - Explore refactoring to PWA or using React Native for a rich mobile experience.

Some minor bugs:
If you refresh the cart on the deployed app it will throw an error however, the cart data does persist via `js-cookie`. On a local machine it should work correctly.

Google Page Speeds for Desktop: 99
Google Page Speeds for Mobile: 83
