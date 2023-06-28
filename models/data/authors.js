import Author from "../Author.js";
import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

let authors = [
  {
    name: "alejandro",
    city: "buenos aires",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "alejandro@mh.com.ar",
  },
  {
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "lucas@mh.com.ar",
  },
  {
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "jose@mh.com.ar",
  },
  {
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "eric@mh.com.ar",
  },
  {
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo:
      "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "igna@mh.com.ar",
  },
];

async function add_authors() {
  for (let author of authors) {
    console.log('searching user by ', author.user_id)
    let user = await User.findOne({ email: author.user_id });
    let user_id = user._id;
    author.user_id = user_id;
    Author.create(author);
  }
}
add_authors()
