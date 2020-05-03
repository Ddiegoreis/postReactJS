import React from 'react'

import { Comentario } from './styles'

export default class Comment extends React.Component {
    render() {
        return <Comentario>{ this.props.texto }</Comentario>
    }
}