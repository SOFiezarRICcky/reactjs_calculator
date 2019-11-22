import React, { Component } from 'react';

class Hasil extends Component {
    render() {
        return (
            <div className="formhasil">
                <p className="hasil">{this.props.results}</p>
                <p className="perhitungan">perhitungan</p>
                <input type="reset" className="Hapus" value="Clear" />
            </div>
        );
    }
}


export default Hasil;