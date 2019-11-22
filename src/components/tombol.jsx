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
                <button className="buton" name="8">8</button>
                <button className="buton" name="9">9</button>
                <button className="buton" name="/">/</button>
                <button className="buton" name="4">4</button>
                <button className="buton" name="5">5</button>
                <button className="buton" name="6">6</button>
                <button className="buton" name="*">*</button>
                <button className="buton" name="1">1</button>
                <button className="buton" name="2">2</button>
                <button className="buton" name="3">3</button>
                <button className="buton" name="-">-</button>
                <button className="nol" name="0">0</button>
                <button className="buton" name="+">+</button>
            </div>
        );
    }
}

export default Tombol;