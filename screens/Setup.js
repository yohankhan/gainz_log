import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import Menu, { MenuItem } from 'react-native-material-menu';

import bg from '../assets/bg2.png';

var screensize = Dimensions.get('window');

class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: '',
			body_part: 'Add Body Part',
			arr: []
		};
	}

	m_function = () => {
		this.setState({
			day: 'Monday'
		});
		this.refs.modal1.open();
	};

	t_function = () => {
		this.setState({
			day: 'Tuesday'
		});
		this.refs.modal1.open();
	};

	w_function = () => {
		this.setState({
			day: 'Wednesday'
		});
		this.refs.modal1.open();
	};

	th_function = () => {
		this.setState({
			day: 'Thursday'
		});
		this.refs.modal1.open();
	};

	f_function = () => {
		this.setState({
			day: 'Friday'
		});
		this.refs.modal1.open();
	};

	s_function = () => {
		this.setState({
			day: 'Saturday'
		});
		this.refs.modal1.open();
	};

	setMenuRef = (ref) => {
		this._menu = ref;
	};

	showMenu = () => {
		this._menu.show();
	};

	chest = () => {
		this.setState({
			body_part: 'chest'
		});
		this._menu.hide();
	};
	back = () => {
		this.setState({
			body_part: 'back'
		});
		this._menu.hide();
	};
	arms = () => {
		this.setState({
			body_part: 'arms'
		});
		this._menu.hide();
	};
	leg = () => {
		this.setState({
			body_part: 'legs'
		});
		this._menu.hide();
	};
	push = () => {
		this.setState({
			body_part: 'chest & triceps'
		});
		this._menu.hide();
	};
	pull = () => {
		this.setState({
			body_part: 'back & biceps'
		});
		this._menu.hide();
	};
	legs = () => {
		this.setState({
			body_part: 'legs & shoulders'
		});
		this._menu.hide();
	};
	shoulders = () => {
		this.setState({
			body_part: 'shoulders'
		});
		this._menu.hide();
	};

	setMenu2Ref = (ref2) => {
		this._menu2 = ref2;
	};

	showMenu2 = () => {
		this._menu2.show();
	};

	leg_squat = () => {
		this.f('SQUAT');

		// this._menu2.hide();
	};

	leg_raise = () => {
		this.f('LEG RAISE');
		this._menu2.hide();
	};

	leg_legpress = () => {
		this.f('LEG PRESS');
		// this._menu2.hide();
	};

	shoulder_press = () => {
		this.f('SHOULDER PRESS');
		this._menu2.hide();
	};

	chest_bench = () => {
		this.f('BENCH_PRESS');
		this._menu2.hide();
	};

	chest_fly = () => {
		this.f('CHEST FLY');
		this._menu2.hide();
	};

	shoulder_raise = () => {
		this.f('SHOULDER RAISE');
		this._menu2.hide();
	};

	f = (data) => {
		var x = data;
		var c = this.state.arr;
		c.push(x);
		this.setState({
			arr: c
		});
	};

	render() {
		return (
			<ImageBackground source={bg} style={{ width: '100%', height: '100%' }} resizeMode="cover">
				<View style={{ marginTop: 15 }}>
					<Text
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 50,
							textAlign: 'center',
							borderBottomWidth: 1,
							borderBottomColor: 'black'
						}}
					>
						GAINZ
					</Text>
				</View>
				<View style={{ marginVertical: 6 }}>
					<Text style={styles.text}>Setup Page</Text>
				</View>

				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity style={styles.card} onPress={this.m_function}>
								<Text style={styles.text}>Monday</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.card} onPress={this.t_function}>
								<Text style={styles.text}>Tuesday</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity style={styles.card} onPress={this.w_function}>
								<Text style={styles.text}>Wednesday</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.card} onPress={this.th_function}>
								<Text style={styles.text}>Thursday</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flex: 1, flexDirection: 'row' }}>
							<TouchableOpacity style={styles.card} onPress={this.f_function}>
								<Text style={styles.text}>Friday</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.card} onPress={this.s_function}>
								<Text style={styles.text}>Saturday</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<Modal
					ref={'modal1'}
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height: 400,
						width: screensize.width - 40,
						elevation: 20,
						backgroundColor: 'white',
						opacity: 20
					}}
					position={'center'}
					swipeToClose={false}
					coverScreen={true}
				>
					<View style={{ flex: 1, flexDirection: 'column', padding: 15 }}>
						<Text style={styles.text}>{this.state.day}</Text>
						<Menu
							ref={this.setMenuRef}
							button={
								<TouchableOpacity onPress={this.showMenu}>
									<Text style={styles.text}>{this.state.body_part}</Text>
								</TouchableOpacity>
							}
						>
							<MenuItem onPress={this.chest}>CHEST</MenuItem>
							<MenuItem onPress={this.back}>BACK</MenuItem>
							<MenuItem onPress={this.arms}>ARMS</MenuItem>
							<MenuItem onPress={this.leg}>LEGS</MenuItem>
							<MenuItem onPress={this.shoulders}>SHOULDERS</MenuItem>
							<MenuItem onPress={this.pull}>BACK AND BICEPS</MenuItem>
							<MenuItem onPress={this.push}>CHEST AND TRICEP</MenuItem>
							<MenuItem onPress={this.legs}>LEGS AND SHOLDERS</MenuItem>
						</Menu>
						<View>
							<Menu
								ref={this.setMenu2Ref}
								button={
									<TouchableOpacity onPress={this.showMenu2}>
										<Text style={styles.text}>Add Exercise</Text>
									</TouchableOpacity>
								}
							>
								<MenuItem underlayColor="red" onPress={this.leg_squat}>Squat</MenuItem>
								<MenuItem underlayColor="red" onPress={this.leg_legpress}>Leg Press</MenuItem>
								<MenuItem onPress={this.leg_raise}>Leg Raise</MenuItem>
								<MenuItem onPress={this.chest_bench}>Bench Press</MenuItem>
								<MenuItem onPress={this.chest_fly}>Chest Fly</MenuItem>
								<MenuItem onPress={this.tri_push}>Tricep Pushdown</MenuItem>
								<MenuItem onPress={this.back_deadlift}>Deadlift</MenuItem>
								<MenuItem onPress={this.back_barpull}>Lat_Bar_Pull</MenuItem>
								<MenuItem onPress={this.bicep_curl}>Bicep_Curls</MenuItem>
								<MenuItem onPress={this.shoulder_press}>Shoulder_Press</MenuItem>
								<MenuItem onPress={this.shoulder_raise}>Shoulder_Raise</MenuItem>
							</Menu>
						</View>
					</View>
					<Button title="add" onPress={this.fun} />
					<Button
						title="debug"
						onPress={() => {
							console.log(this.state.day, this.state.body_part, this.state.arr);
							// clear the array
						}}
					/>
				</Modal>
			</ImageBackground>
		);
	}
}

export default Setup;

const styles = StyleSheet.create({
	card: {
		width: 130,
		height: 130,
		elevation: 10,
		backgroundColor: 'white',
		marginHorizontal: 15,
		marginVertical: 15,
		borderRadius: 10,
		justifyContent: 'center'
	},
	text: {
		color: 'black',
		fontSize: 25,
		textAlign: 'center'
	},
	text2: {
		color: 'yellow',
		fontSize: 25,
		textAlign: 'center'
	},
	button: {
		color: 'black',
		elevation: 10,
		width: 200,
		height: 50,
		borderRadius: 5
	}
});
