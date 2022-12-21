import Link from "next/link";
import styled from "styled-components";
import productList from "../_data/productList";
import {useState, useEffect} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import ProductDetails from "../pages/products/[productId]";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(productList);

  useEffect(() => {
    setFilteredList(
      productList.filter(product => {
        return product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  }, [searchQuery]);
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/basket">Basket</StyledLink>
        </li>
        <li>
          <StyledLink href="/about">About</StyledLink>
        </li>
      </ul>

      <SearchContainer>
        <input
          type="text"
          placeholder="Search"
          onChange={() => {
            setSearchQuery(document.querySelector("input").value);
          }}
        />

        {searchQuery && (
          <SearchList>
            {filteredList.length === 0 && (
              <SearchResult
                onClick={e => {
                  e.preventDefault();
                  document.querySelector("input").value = "";

                  setSearchQuery("");
                }}
              >
                No results
              </SearchResult>
            )}
            {filteredList.map(product => {
              return (
                <SearchResult className="link" key={product.id}>
                  <StyledLink
                    href={`/products/${product.id}`}
                    onClick={() => {
                      setSearchQuery("");
                    }}
                  >
                    {product.brand}
                  </StyledLink>
                </SearchResult>
              );
            })}
          </SearchList>
        )}
      </SearchContainer>

      <GiHamburgerMenu className="hamburger" />
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: grey;
  color: white;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 5px;
    padding: 5px;
  }
  div {
    input,
    button {
      margin-top: 18px;
      padding: 8px;
    }
    button {
      background-color: #555;
      color: white;
      margin: 20px;
    }
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 768px) {
    div,
    ul {
      display: none;
    }
    .hamburger {
      display: block;
      font-size: 3rem;
      margin: 10px;
      padding: 5px;
      cursor: pointer;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SearchList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  top: 100%;
  left: 0;
`;

const SearchResult = styled.li`
  text-decoration: none;
  color: white;
  background-color: #555;
  border: 1px solid white;
  padding: 5px;
  width: 100%;
  cursor: pointer;
`;
export default Navbar;
