import React, { Component } from 'react';
import styled from 'styled-components';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
  }

  handleClick(target) { 
    const { handlePage } = this.props;
    const page = target.currentTarget.getAttribute('data-page')
    this.setState({
      page
    });
    console.log(page);
    handlePage(page);
  }
  
  render() {
    const pages = [1, 2, 3, 4, 5, 6, 7];
    return (
      <PaginationContainer>
      <PaginationNav>
        <a href="#">&laquo;</a>
        <PageNumbers>
          {
            pages.map((page) => (
              <Page>
                <a data-page={page} onClick={this.handleClick.bind(this)}>{page}</a>
              </Page>
            )) 
          }
        </PageNumbers>
        <a href="#">&raquo;</a>
      </PaginationNav>
    </PaginationContainer>
  );
}
};
export default Pagination;


const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 1.875rem;
    margin-bottom: 1.25rem;
    > a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
    }
`;

const PaginationNav = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  font-weight: 500;
  line-height: 1.5625rem;
`;

const PageNumbers = styled.div`
overflow-x: hidden;
    display: flex;
    flex-wrap: nowrap;
    min-width: 3.75rem;
    flex: 1 1 auto;
    padding: 0.625rem 0px;
`;

const Page = styled.div`
  display: inline-block;
  text-align: center;
  width: 1.875rem;
  color: rgb(0, 0, 0);
  flex: 0 0 auto;
  margin: 0px 0.625rem;
  text-decoration: underline;
`;