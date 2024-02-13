import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
 
function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [dataOne,setData1]=useState([]);
  const [originalData1,setOriginalData1]=useState([]);
  const [searchData1,setSearchData1]=useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then(response => {
      setData(response.data.users);
      setOriginalData(response.data.users);
    });
  }, []);
  useEffect(()=>{
      axios.get("https://dummyjson.com/products").then(response =>{
        setData1(response.data.products);
        setOriginalData1(response.data.products);
      });
  },[]);
 
  const mySearch = (datasearch) => {
    setSearchData(datasearch.target.value);
  };
  const mySearchOne=(dataOne)=>{
    console.log(dataOne)
    setSearchData1(dataOne.target.value);
  };
 
  useEffect(() => {
    const updatedData = originalData.filter(data => data.firstName.includes(searchData));
    setData(updatedData);
  }, [searchData]);
 
  useEffect(()=>{
    const updatedData1=originalData1.filter(dataOne=>dataOne.title.includes(searchData1));
    setData1(updatedData1);
  },[searchData1]);
 
  const download = () => {
    const sheetData = data.map(users => ({
      ID: users.id,
      FirstName: users.firstName,
      LastName: users.lastName,
      MaidenName: users.maidenName,
      Age: users.age,
      Gender: users.gender,
      Email: users.email,
      Phone: users.phone,
      Username: users.username,
      Password: users.password,
      BirthDate: users.birthDate
    }));
 
    const sheetDataOne = dataOne.map(products => ({
      ID: products.id,
      Title: products.title,
      Description: products.description,
      Price: products.price,
      DiscountPercentage: products.discountPercentage,
      Rating: products.rating,
      Stock: products.stock,
      Brand: products.brand,
      Category: products.category
    }));
 
    const ws = XLSX.utils.book_new();
    const sheet1 = XLSX.utils.json_to_sheet(sheetData, { header: ['ID', 'FirstName', 'LastName', 'MaidenName', 'Age', 'Gender', 'Email', 'Phone', 'Username', 'Password', 'BirthDate'] });
    const sheet2 = XLSX.utils.json_to_sheet(sheetDataOne, { header: ['ID', 'Title', 'Description', 'Price', 'DiscountPercentage', 'Rating', 'Stock', 'Brand', 'Category'] });
 
    XLSX.utils.book_append_sheet(ws, sheet1, 'Sheet 1');
    XLSX.utils.book_append_sheet(ws, sheet2, 'Sheet 2');
 
    XLSX.writeFile(ws, 'userData.xlsx');
  };
 
  return (
    <div>
        <h1>Sheet 1</h1>
        <button onClick={download}>Download</button>
      <input type='text' placeholder='Search' onChange={(data) => mySearch(data)} />
 
      <table className='table'>
        <thead className='heading'>
          <tr>
            <th>ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>maidenName</th>
            <th>age</th>
            <th>gender</th>
            <th>email</th>
            <th>phone</th>
            <th>username</th>
            <th>password</th>
            <th>birthDate</th>
          </tr>
        </thead>
        <tbody className='body'>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <h1>Sheet 2</h1>
    <input type="text" placeholder='search' onChange={(data1)=>mySearchOne(data1)}/>
    <table className='table'>
        <thead className='heading'>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>discountPercentage</th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody className='body'>
          {dataOne.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  );
}
export default App;