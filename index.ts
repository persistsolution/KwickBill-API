require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//import multer from 'multer';
// import userRoutes from '@routes/userRoutes';
import categoryRoute from  './src/routers/billsoftadmin/selling-product/category-route';
import subCategoryRoute from './src/routers/billsoftadmin/selling-product/subcategory-route';
//import employeeRoute from './src/routers/billsoftadmin/employee/employee-route';
//import productRoute from './src/routers/billsoftadmin/selling-product/product-route';
//import franchiseRoute from './src/routers/billsoftadmin/franchise/franchise-route';
import userRoute from './src/routers/billsoftadmin/users/user-route';
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(categoryRoute);
app.use(subCategoryRoute);
// app.use(employeeRoute);
// app.use(productRoute);
// app.use(franchiseRoute);
app.use(userRoute);
app.use(express.static('uploads'));

// Enable CORS for specific origin
 app.use(cors({
  origin: 'http://13.234.213.24:5173', // Allow requests from this origin
 }));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
