import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	KeyboardAvoidingView
} from 'react-native';
import Modal from 'react-native-modalbox';

import bg from '../assets/bg2.png';

var screensize = Dimensions.get('window');

class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			day: ''
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
						backgroundColor: 'black',
						opacity: 20
					}}
					position={'center'}
					swipeToClose={false}
					coverScreen={true}
				>
					<View style={{ flex: 1, flexDirection: 'column' }}>
						<Text style={styles.text2}>{this.state.day}</Text>
					</View>
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
	}
});
