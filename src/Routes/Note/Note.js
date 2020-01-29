import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import { GET_NOTE } from "../../queries";

const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
padding: 0.375rem 0.75rem;
border-radius: 0.25rem;
font-size: 1rem;
line-height: 1.5;
border: 1px solid lightgray;
color: gray;
backgroud: white;
`;

export default class Note extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data?.note ? (
            <>
              <TitleComponent>
                <Title>{data?.note && data?.note.title}</Title>
                <Link to={`/edit/${data?.note.id}`}>
                  <Button>Edit</Button>
                </Link>
              </TitleComponent>
              <MarkdownRenderer markdown={data?.note.content} />
            </>
          ) : null
        }
      </Query>
    );
  }
}