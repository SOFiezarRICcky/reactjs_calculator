import React, { Component } from 'react';

class Tombol extends Component {

    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };

    render() {
        return (
            <div className="alat-hitung">
                {/* <input type="button" name="tujuh" value="7" />
                <input type="button" name="lapan" value="8" />
                <input type="button" name="sembilan" value="9" />
                <input type="button" name="bagi" value="/" />
                <input type="button" name="empat" value="4" />
                <input type="button" name="lima" value="5" />
                <input type="button" name="enma" value="6" />
                <input type="button" name="kali" value="*" />
                <input type="button" name="satu" value="1" />
                <input type="button" name="dua" value="2" />
                <input type="button" name="tiga" value="3" />
                <input type="button" name="kurang" value="-" />
                <input className="kosong" name="nol" type="button" value="0" />
                <input type="button" name="tambah" value="+" /> */}

                <button className="buton" name="7" onClick={this.buttonPressed}>7</button>
                <button className="buton" name="8" onClick={this.buttonPressed}>8</button>
                <button className="buton" name="9" onClick={this.buttonPressed}>9</button>
                <button className="buton" name="/" onClick={this.buttonPressed}>/</button>
                <button className="buton" name="4" onClick={this.buttonPressed}>4</button>
                <button className="buton" name="5" onClick={this.buttonPressed}>5</button>
                <button className="buton" name="6" onClick={this.buttonPressed}>6</button>
                <button className="buton" name="*" onClick={this.buttonPressed}>*</button>
                <button className="buton" name="1" onClick={this.buttonPressed}>1</button>
                <button className="buton" name="2" onClick={this.buttonPressed}>2</button>
                <button className="buton" name="3" onClick={this.buttonPressed}>3</button>
                <button className="buton" name="-" onClick={this.buttonPressed}>-</button>
                <button className="nol" name="0" onClick={this.buttonPressed}>0</button>
                <button className="buton" name="+" onClick={this.buttonPressed}>+</button>
                <button className="samadengan" name="=" onClick={this.buttonPressed}>=</button>
                <button className="hapus" name="C" onClick={this.buttonPressed}>C</button>
            </div>
        );
    }
}

export default Tombol;