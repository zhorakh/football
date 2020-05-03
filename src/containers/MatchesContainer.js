import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import PropTypes from 'prop-types'

import { getPlayers } from '../actions'
import Matches from '../components/Matches'

class MatchesContainer extends Component {

	render() {
        const { actions, players, teams } = this.props
		return(
			<div>
                <Matches 
                    actions={actions}
                    teams={teams}
                    players={players}
                />
            </div>
		)
	}
}

const mapStateToProps = (store) => {
    return {
        players: store.main.players,
        teams: store.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
        {
            ...getPlayers
        }, dispatch)
    }
}

MatchesContainer.propTypes  = {
    actions: PropTypes.object,
    teams: PropTypes.array
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer)