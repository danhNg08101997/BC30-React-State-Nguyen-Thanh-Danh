import React, { Component } from 'react'
import Glasses from './Glasses';

const data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/GlassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

export default class BaiTapThuKinh extends Component {
    renderGlasses = () => {
        return data.map((glasses, index) => {
          return (
            <div className="col-2" key={index}>
              <Glasses glasses={glasses} renderDetail={this.renderDetail}/>
            </div>
          );
        });
      };
    
        renderDetail = (glassesClick) => {
          this.setState({
            detailGlasses: glassesClick,
          });
        };
        state = {
            detailGlasses: {
              id: 1,
              price: 30,
              name: "GUCCI G8850U",
              url: "./img/glassesImage/v1.png",
              desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },
          };
        
  render() {
    let { id, price, name, url, desc } = this.state.detailGlasses;
    return (
      <div className="wrapper">
      <div className="wrapper-rbga">
        <header className="header">
          <div className="container text-center">
            <h1>TRY GLASSES APP ONLINE</h1>
          </div>
        </header>
        <div className="app">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img src={url} alt="" />
                <div className="card-body">
                  <h2>{name}</h2>
                  <p >{desc}</p>
                  <p className="m-0">{price}$</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={url} alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="glasses ">
          <div class="container">
            <div className="row bg-light py-5">{this.renderGlasses()}</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
