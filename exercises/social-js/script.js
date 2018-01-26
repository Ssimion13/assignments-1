var theatreGoer = {
    name: "JoAnn Simpson",
    age: 30,
    gender: "female",
    showFavoriteColor: function() {
        console.log("green");
    },
    favoriteShows: [
        {
            title: "Candide",
            musicalComposer: "some person",
            playwright: "some other person",
            numTimesSeen: 2
        },
        {
            title: "Orpheus Descending",
            numTimesSeen: 1
        },
        {
            title: "Rent",
            numTimesSeen: 14
        },
        {
            title: "The Fantastics",
            numTimesSeen: 7
        },
        {
            title: "Les Miserables",
            numTimesSeen: 3
        }
    ],
    familyMembers: [
        {
            relation: "child",
            name: "Bobby Simpson",
            age: 13,
            gender: "male",
            showFavoriteColor: function() {
                console.log("yellow");
            },
            favoriteShows: [
                {
                title: "The Full Monte",
                numTimesSeen: 2
                },
                {
                title: "Spider Man",
                numTimesSeen: 7
                },
                {
                title: "Phantom of the Opera",
                numTimesSeen: 3
                }
            ],

            relation: "spouse",
            name: "Mike Simpson",
            age: 32,
            gender: "male",
            showFavoriteColor: function() {
                console.log("blue");
            },
            favoriteShows: [
                {
                title: "The Full Monte",
                numTimesSeen: 1
                },
                {
                title: "Spider Man",
                numTimesSeen: 2
                },
                {title: "Phantom of the Opera",
                numTimesSeen: 1
                }
            ]
        }]
};

console.log(theatreGoer.showFavoriteColor());
