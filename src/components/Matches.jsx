import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types'
import './Matches.css'

function rand() {
    return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
    const top = 50 + rand()
    const left = 50 + rand()
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
  }

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
	},
	paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
	},
	root: {
		flexGrow: 1,
	}
});

class Matches extends Component {
	constructor() {
		super()
		this.state = {
			finals: null,
			open: false
		}
	}

	showPlayers = (e) => {
        const { actions } = this.props
        let name = e.target.innerText
		actions.getPlayers(name)
		this.setState({
			open: true
		})	
    }

	changeFinals = (number) => {
        this.setState({
            finals: number
        })
	}
	

    closeModal = () => {
        this.setState({ open: false, deletingIndex: null })
    }

	render() {
        const { classes, teams, players } = this.props
		const { finals } = this.state
		console.log(players)
        const numTeamByStage = {
            1: 8,
            2: 4,
            3: 2,
        }
        const numTeams = numTeamByStage[finals]
		let cahngeTeams = teams.slice(0, numTeams)
		return (
		<div className='wrapper'>
			<AppBar position="static" color="default">
				<Toolbar>
					Football chempionship
				</Toolbar>
			</AppBar>
			<Button variant="outlined" className={classes.button} onClick={() => this.changeFinals(1)}>
				1/8 Final
			</Button>
			<Button variant="outlined" color="secondary" className={classes.button} onClick={() => this.changeFinals(2)}>
				1/4 Final
			</Button>
			<Button variant="outlined" color="primary" className={classes.button} onClick={() => this.changeFinals(3)}>
				1/2 Final
			</Button>
			{finals !== null && cahngeTeams.map(item => {
				return(
				<div key={item.id} style={{
					flex: 1,
					flexBasis: "50%",
					marginBottom: '10px'
					}}>
					<img src={item.flag} className='flag'/>
					<span onClick={this.showPlayers} className='team-name'>{item.name}</span>
				</div>
				)
			})}
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.open}
				onClose={this.closeModal}
			>
				<div style={getModalStyle()} className={classes.paper}>
					{players && players.map(item => {
						return (
							<div key={item.id}>
								<p>	
									<b>Name:</b>
									{item.name}, 
									<b>Age:</b>
									{item.age}
								</p>
							</div>
						)
					})}
					<span onClick={this.closeModal}>Close</span>
				</div>
			</Modal>
		</div>
		)
	}
}

Matches.propTypes  = {
	teams: PropTypes.array,
	classes: PropTypes.object.isRequired,
	players: PropTypes.array
}

export default withStyles(styles)(Matches)
