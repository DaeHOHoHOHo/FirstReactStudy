import React, {Component} from 'react';

class TOC extends Component{
    render() {
        console.log('Content render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li key = {data[i].id}><a href = {"/content/" + data[i].id}>{data[i].title}</a></li>);
            i = i+1;
        }
        return(
            <nav>
            <ul>
                <li><a herf="1.html">HTML</a></li>
                <li><a herf="2.html">CSS</a></li>
                
            </ul>
            </nav>
        )
    }
}

export default TOC;