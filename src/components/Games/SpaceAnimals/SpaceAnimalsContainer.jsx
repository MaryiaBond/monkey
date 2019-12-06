import React from 'react';
import SpaceAnimals from './SpaceAnimals';
import connect from 'react-redux/es/connect/connect';
import {initializeGetPoint} from '../../../redux/games-reducer'

class SpaceAnimalsContainer extends React.Component {
    render () {
        return (
            <div>
                Знакомтесь господа, Космические животные! Придумайте им Космические имена чтобы они продолжали чувствовать себя особенными! =) 
                <SpaceAnimals  {...this.props} animalShortNames={this.props.animalShortNames} />
            </div>
        )
    }
    
}
let mapStateToProps = (state) => ({
    animalShortNames: state.games.animalShortNames
})

export default connect(mapStateToProps, {initializeGetPoint}) (SpaceAnimalsContainer)




