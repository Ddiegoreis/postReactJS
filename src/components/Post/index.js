import React from "react";

import Comment from "../Comment";

import { Container, TituloPost, TextInput, Botao } from './styles'

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],

            newCommentText: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextChange=this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText },    
            ],
        });

        this.setState({ newCommentText: "" })

        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value });
    }

    render() {
        return (
            <Container>
                <TituloPost>{this.props.title}</TituloPost>

                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    />
                    <Botao type="submit">Comentar</Botao>
                </form>

                {this.state.comments.map((comments, index) => (
                    <Comment key={index} texto={comments.text} />
                ))}
            </Container>
        );
    }
}
