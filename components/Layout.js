import styled from "styled-components";
import search from "../pages/search";

export default function Layout({children}) {
  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/basket">Basket</StyledLink>
          </li>
          <li>
            <StyledLink href="/favorite">Favorite</StyledLink>
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
              {filteredList.map(drink => {
                return (
                  <SearchResult className="link" key={drink.id}>
                    <StyledLink
                      href={`/product/${drink.id}`}
                      onClick={() => {
                        setSearchQuery("");
                      }}
                    >
                      {drink.brand}
                    </StyledLink>
                  </SearchResult>
                );
              })}
            </SearchList>
          )}
        </SearchContainer>

        <GiHamburgerMenu className="hamburger" />
      </StyledNav>

      {children}

      <StyledFooter>
        <p>© Casa del Agave</p>
      </StyledFooter>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: grey;
  padding: 15px;
`;

const StyledFooter = styled.footer`
  background-color: grey;
  color: white;
  height: 60px;
  padding: 15px;
  padding-top: 8px;
  width: 100%;
`;

const StyledMenu = styled.button`
  margin-right: 550px;
  padding: 5px;
`;

const StyledInput = styled.input`
  margin-right: 20px;
`;

const StyledSearch = styled.button`
  padding: 5px;
`;
