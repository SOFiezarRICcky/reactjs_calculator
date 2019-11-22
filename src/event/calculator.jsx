import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            satu=null,
            dua=null,
            tiga=null,
            empat=null,
            lima=null,
            enam=null,
            tujuh=null,
            lapan=null,
            sembilan=null
        }
    }

    onClick = (event) => {
        let tambah
    }

    render() {
        return (
            <div className="wrapper">
                <div className="formhasil">
                    <p className="hasil">hasil</p>
                    <p className="perhitungan">perhitungan</p>
                    <input type="reset" className="Hapus" value="Clear" />
                </div>

                <div className="alat-hitung">
                    <input type="button" name="tujuh" value="7" />
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
                    <button name="1">1</button>
                    <input type="button" name="kurang" value="-" />
                    <input className="kosong" name="nol" type="button" value="0" />
                    <input type="button" name="tambah" value="+" />
                </div>
            </div>
        );
    }
}

export default Calculator;