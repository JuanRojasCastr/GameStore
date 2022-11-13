# Games Store

This project is a frontend responsive application developed with Angular, where you can search and detail thousands of games.

The deployed app url:

https://mygamestore.netlify.app/

The application have two main views, first the home where you can see the result of your searches from the header, and the detail view of each game.

![](https://media.discordapp.net/attachments/584593411567517710/1041466896551260220/image.png?width=1377&height=683)

This view have 3 different states, the first time you enter here you have no searches, so the view is empty, from the header you can start searching,
once you search something pressing 'enter' the view will change:

![](https://media.discordapp.net/attachments/584593411567517710/1041467738050285568/image.png?width=1377&height=683)

Notice that when you scroll down the logo of the header change its height with a soft transition and when you are over a button it changes his color:

![](https://media.discordapp.net/attachments/584593411567517710/1041469455944912966/image.png?width=1440&height=645)

Now if you search something that doesn't have any result related another advice will appear:

![](https://media.discordapp.net/attachments/584593411567517710/1041468278507315200/image.png?width=1377&height=682)

After you choose a game to see the details pressing the button on the card you will be redirected to the second main view,
here you can look the game with few more details like different offers, and the best offer ever, you can scroll down over the offers,
and when you are over one it changes of color.

![](https://media.discordapp.net/attachments/584593411567517710/1041470275805511720/image.png?width=1377&height=683)

Finally, if you want to go back, you can do it from 3 ways, making a new search on the header, pressing the logo, or using the breadcrumb.

All the data used on the app its taken from:

    https://www.cheapshark.com/api/1.0/games

## Created by

- Juan Camilo Rojas Castro
