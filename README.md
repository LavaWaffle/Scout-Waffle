# Scout Waffle

## To Do
- [x] Front End
  - [x] Add auto modal
    - [x] Launch data
  - [x] Add front end game map
    - [x] Display game map
    - [x] Display markers on click
      - [x] Open modal on click for launch data
  - [x] Add end game modal
    - [x] Cargo Ranking Point boolean
    - [x] Climb Bar ("NoClimb", "Low", "Middle", "High", "Traversal")
    - [x] Climb Ranking Point boolean
    - [x] We Win ("Win", "Lose", "Tie")
    - [x] Our Team ("Red", "Blue")
- [x] Back End
  - [x] TRPC function to write data to mysql database
  - [x] Set up planet scale mysql database

## How To Use This Program

### Prerequisites
- Install [Node.js](https://nodejs.org/en/download/)
- Install Pnpm: `$ npm install -g pnpm`
- Create a [planet scale database](https://docs.planetscale.com/docs/tutorials/planetscale-quick-start-guide)
- Create a [vercel account](https://vercel.com/signup)
### Development
1. Clone this repository
``` bash
$ git clone https://github.com/LavaWaffle/Scout-Waffle.git
```
2. Install dependencies
``` bash
$ pnpm install
```
3. Start the pscale database server
``` bash
$ pscale connect <dbname> <branch> --port 3309
```
4. Create .env file with the following variables:
``` bash
DATABASE_URL="mysql://root@127.0.0.1:3309/<dbname>"
```
5. Setup the database
``` bash
$ pnpx prisma db push
```
6. Run the server
``` bash
$ pnpm run dev
```

### Deployment
1. Create a [vercel project](https://vercel.com/new)
> Make sure to create your own github repository
2. Connect the deployment to the [database](https://docs.planetscale.com/docs/tutorials/connect-any-application)
> Take url from the database and add it to the [vercel environment variables](https://vercel.com/docs/concepts/projects/environment-variables)
 >> (DATABASE_URL = link from step 2)

