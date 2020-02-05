import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import Menu, { MenuItem } from 'react-native-material-menu';
import Firebase from 'firebase';

import bg from '../assets/bg2.png';
import { db } from './settings/config';
import { objectOf } from 'prop-types';
import { object } from '@hapi/joi';

var screensize = Dimensions.get('window');

class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: '',
			body_part: 'Add Body Part',
			arr: [],
			menu_color: 'white'
		};
	}

	adder = (bool, the_day) => {
		db.ref('User/' + 'Config/' + the_day).push({
			C_DATA: bool
		});
	};

	checker = (da2) => {
		db.ref('User/' + 'Config/' + da2).once('value', (snapshot) => {
			// let v = Object.values(snapshot.val());
			// console.log(v);
			// console.log(snapshot.val());
			let v = snapshot.val();
			return v;
		});
	};

	m_function = () => {
		this.setState({
			day: 'Monday'
		});
		let day_bool = this.checker(this.state.day);

		console.log(this.state.day, day_bool);
		// console.log(day_bool);

		// if (day_bool == 0) {
		// 	this.adder(1,this.state.day);
		// 	this.refs.modal1.open();
		// } else {
		// 	alert('Already Saved');
		// }
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
			body_part: 'chest',
			menu_item_bool: 'white'
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
		// this._menu2.hide();
	};

	leg_legpress = () => {
		this.f('LEG PRESS');
		// this._menu2.hide();
	};

	shoulder_press = () => {
		this.f('SHOULDER PRESS');
		// this._menu2.hide();
	};

	chest_bench = () => {
		this.f('BENCH_PRESS');
		// this._menu2.hide();
	};

	chest_fly = () => {
		this.f('CHEST FLY');
		// this._menu2.hide();
	};

	shoulder_raise = () => {
		this.f('SHOULDER RAISE');
		// this._menu2.hide();
	};

	f = (data) => {
		var x = data;
		var c = this.state.arr;
		c.push(x);
		this.setState({
			arr: c,
			menu_color: 'silver'
		});
	};

	// DEBUGGER
	// debugger = () => {
	// 	this.setState({
	// 		day: 'Monday'
	// 	});
	// 	this.checker(this.state.day);
	// 	this.setter(this.state.day);
	// 	this.checker(this.state.day);
	// 	this.checker('Monday');
	// 	this.checker('Tuesday');
	// };

	add_data = (data) => {
		let day = this.state.day + '/';
		let part = this.state.body_part + '/';

		db.ref('User' + '/' + day + part).set({
			U_DATA: data
		});
	};

	data_b_entry = () => {
		console.log('DEBUGGER', this.state.day, this.state.body_part, this.state.arr);
		this.add_data(this.state.arr);
		this.setState({
			arr: []
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
				<View style={{ marginTop: 5 }}>
					<Text style={styles.text}>Setup Page</Text>
				</View>

				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
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
								<MenuItem onPress={this.leg_squat} style={{ backgroundColor: this.state.menu_color }}>
									<Text style={styles.font}>SQUAT</Text>
								</MenuItem>
								<MenuItem
									onPress={this.leg_legpress}
									style={{ backgroundColor: this.state.menu_color }}
								>
									<Text style={styles.font}>LEG PRESS</Text>
								</MenuItem>
								<MenuItem onPress={this.leg_raise} style={{ backgroundColor: this.state.menu_color }}>
									<Text style={styles.font}>LEG RAISE</Text>
								</MenuItem>
								<MenuItem onPress={this.chest_bench} style={{ backgroundColor: this.state.menu_color }}>
									<Text style={styles.font}>BENCH PRESS</Text>
								</MenuItem>
								<MenuItem onPress={this.chest_fly} style={{ backgroundColor: this.state.menu_color }}>
									<Text style={styles.font}>CHEST FLY</Text>
								</MenuItem>
								<MenuItem onPress={this.tri_push} style={{ backgroundColor: this.state.menu_color }}>
									<Text style={styles.font}>TRICEP PUSHDOWN</Text>
								</MenuItem>
								<MenuItem
									onPress={this.back_deadlift}
									style={{ backgroundColor: this.state.menu_color }}
								>
									<Text style={styles.font}>DEADLIFT</Text>
								</MenuItem>
								<MenuItem
									onPress={this.back_barpull}
									style={{ backgroundColor: this.state.menu_color }}
								>
									{' '}
									<Text style={styles.font}>BARPULL</Text>
								</MenuItem>
								<MenuItem onPress={this.bicep_curl} style={{ backgroundColor: this.state.menu_color }}>
									{' '}
									<Text style={styles.font}>BICEP CURLS</Text>
								</MenuItem>
								<MenuItem
									onPress={this.shoulder_press}
									style={{ backgroundColor: this.state.menu_color }}
								>
									{' '}
									<Text style={styles.font}>SHOULDER PRESS</Text>
								</MenuItem>
								<MenuItem
									onPress={this.shoulder_raise}
									style={{ backgroundColor: this.state.menu_color }}
								>
									{' '}
									<Text style={styles.font}>SIDE RAISE</Text>
								</MenuItem>
							</Menu>
						</View>
					</View>
					<Button title="add" onPress={this.data_b_entry} />
					<Button title="debug" onPress={this.debugger} />
					{/* () => {
							console.log(this.state.day, this.state.body_part, this.state.arr);
						} */}
				</Modal>
				{/* <TouchableOpacity style={{color:"black",width:20,height:20,elevation:20}} onPress={()=>console.log("OK")}/> */}
				<Button
					title="GO"
					onPress={() => {
						console.log('GO');
					}}
				/>
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
	},
	font: {
		fontSize: 12
	}
});
