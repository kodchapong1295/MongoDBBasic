const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

// fruit.save();



const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema)

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit!"
})

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit:mango}, function(err){
    if (err) {
        console.log(err);
    }else{
        console.log("Successfully updated the document.");
    }
})

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// })

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Best fruit ever!"
})
const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "sour fruit ever!"
})
const banana = new Fruit({ //Validation
    name: "Banana",
    rating: 3,
    review: "weird fruit ever!"
})

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved all the fruits to fruits");
//     }
// });

Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    }else{

        mongoose.connection.close();

        fruits.forEach((fruit)=>{
            console.log(fruit.name);
        })
    }
});

// Fruit.updateOne({_id: "5f8eddc20298312ce5d366ee"}, {name: "Peach"}, (err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("Successfully updated the document.");
//     }
// });

// Fruit.deleteOne({_id: "5f8eddc20298312ce5d366ee"}, (err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the document.");
//     }
// })

// Person.deleteMany({name: "John"}, (err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the documents");
//     }
    
// })
