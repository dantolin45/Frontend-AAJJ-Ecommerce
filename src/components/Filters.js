import React,{ useEffect, useState } from "react"
import { getCategories,getSizes,getSubCategories } from "../api/apiFuntions"
import { Dropdown }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Filters=({props})=>{
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])  
    const [size, setSize] = useState([])    
    const [filters, setFilters] = useState([])
    
  const handleClick = (e) => {
    e.preventDefault();
    setFilters(filters => ({ ...filters, [e.target.name]: e.target.value }))
    
  }

  /* -------------------Category useEffect -------------------*/ 
  useEffect(() => {
    getCategories()
      .then(Categories => {
      setCategory(Categories)
    })
    

  /* ------------------SubCategory useEffect -----------------*/ 

    getSubCategories()
      .then(SubCategory => {
      setSubCategory(SubCategory)
    })


  /* -------------------Size     useEffect -------------------*/ 
  
    getSizes()
      .then(Sizes => {
      setSize(Sizes)
    })
  },[])
  /* --------------------Filter useEffect --------------------*/ 

    /* useEffect(() => {
    if (!listProduct.length) return;
    let newProductos = [...listProduct];

    if (filters) {
      newProductos = newProductos.filter(product => product.SubCategory === filters.SubCategory);
    }

    if (filters) {
      newProductos = newProductos.filter(product => product.Size.includes(filters.Size));
    }

    if(filters){
      newProductos = newProductos.filter(product => product.Category === filters.Category);
    }

    setProductosFiltrados(newProductos);
  }, [filters])*/
  
    return(


    <div className="filterSection">
    <h1 className="titleFilter">Filtros</h1>
      <section>
              <div className="vertical-buttons">
            <Dropdown>
              
              <Dropdown.Toggle  className="size-buttons"variant="success" id="dropdown-basic">
                Género
              </Dropdown.Toggle>

              <Dropdown.Menu>
              {subCategory.map(subcategory => (
                <Dropdown.Item className="item-filter" key={subcategory.IdSubCategory}> 
                  <button onClick={handleClick} className="size-buttons" value={subcategory.SubCategory}>{subcategory.SubCategory}</button>
                </Dropdown.Item>
                ))}

                <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Reset</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 

                <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant = "success" id = "dropdown-basic">
                  Talles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {size.map(size => (
                <Dropdown.Item className="item-filter" key={size.IdSize}> 
                  <button onClick={handleClick} className="size-buttons" value={size.size}>{size.size}</button>
                </Dropdown.Item>
                ))}
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Resetear filtros</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            <div className="filter-category">
              <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant="success" id="dropdown-basic">
                  Deportes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {category.map(categories => (
                <Dropdown.Item className="item-filter" key={categories.IdCategory}> 
                  <button onClick={handleClick} className="size-buttons" value={categories.Category}>{categories.Category}</button>
                </Dropdown.Item>
                ))}
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Resetear filtros</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
           </div>
            </section>
        </div>  
    )

}

export default Filters;