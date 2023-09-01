import axios from "axios";
import { act } from "react-dom/test-utils";
let catalog = [
    {
        "title" : "Addition Board",
        "category" : "boards",
        "price" : 12.99,
        "image" : "addboard.jpg",
        "_id" : "1"
    },

    {
        "title" : "Post-it Note Holder",
        "category" : "other",
        "price" : 14.99,
        "image" : "postit.jpeg",
        "_id" : "2"
    },

    {
        "title" : "ABC Flash Cards",
        "category" : "other",
        "price" : 16.99,
        "image" : "abcflashcard.jpg",
        "_id" : "3"
    },

    {
        "title" : "ABC Puzzle",
        "category" : "boards",
        "price" : 17.99,
        "image" : "abcpuz.jpg",
        "_id" : "4"
    },
    {
        "title" : "Book Earrings",
        "category" : "earrings",
        "price" : 18.99,
        "image" : "bookear.JPG",
        "_id" : "5"
    },
    {
        "title" : "Ghost Earrings",
        "category" : "earrings",
        "price" : 19.99,
        "image" : "ghostear.JPG",
        "_id" : "6"
    },
    {
        "title" : "Multiplication Board",
        "category" : "boards",
        "price" : 12.99,
        "image" : "mulboard.jpeg",
        "_id" : "7"
    },
    {
        "title" : "Skeleton Earrings",
        "category" : "earrings",
        "price" : 10.99,
        "image" : "skelear.JPG",
        "_id" : "8"
    },
]

class DataService{
serverURL = "http://127.0.0.1:5000";

    async getProducts(){
        //uncomment next line to work with local data
        //return catalog;

        //call server
        const response = await axios.get (this.serverURL + "/api/products");
        return response.data;
    }
    async getCategories(){
        const response = await axios.get(this.serverURL + "/api/categories");
        return response.data;
    }

    async saveProduct(prod){
        const response = await axios.post(this.serverURL + "/api/products", prod);
        return response.data;
    }

    async saveCoupon(coupon){
        const response = await axios.post(this.serverURL + '/api/coupons', coupon);
        return response.data;
    }
    async deleteProduct (id){
        const response = await axios.delete(this.serverURL + "/api/products/id/" + id);
        return response.data;
    }
}

export default DataService;