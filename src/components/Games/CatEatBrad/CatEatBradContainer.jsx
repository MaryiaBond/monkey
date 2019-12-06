import React from 'react';
import CatEatBrad from './CatEatBrad';
import connect from 'react-redux/es/connect/connect';
import {setCurrentLevel, setCurrentSize} from '../../../redux/games-reducer'

class CatEatBradContainer extends React.Component {
    render () {
        return (
           
                <CatEatBrad  {...this.props} currentLevel={this.props.currentLevel} setCurrentLevel={this.props.setCurrentLevel} setCurrentSize={this.props.setCurrentSize}/>
          
        )
    }
    
}
let mapStateToProps = (state) => ({
    currentLevel: state.games.currentLevel,
    currentSize: state.games.currentSize
})

export default connect(mapStateToProps, {setCurrentLevel, setCurrentSize}) (CatEatBradContainer)




