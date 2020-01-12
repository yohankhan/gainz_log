import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import bg from '../assets/bg2.png';

class Setup extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ImageBackground source={bg} style={{ width: '100%', height: '100%' }} resizeMode="cover">
				<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View
							style={{
								width: 130,
								height: 80,
								elevation: 10,
								backgroundColor: 'white',
								marginHorizontal: 5,
								marginVertical: 8,
								borderRadius: 10
							}}
						>
							<Text style={{ color: 'white' }}>DAY</Text>
						</View>
						<View
							style={{
								width: 130,
								height: 80,
								elevation: 10,
								backgroundColor: 'white',
								marginHorizontal: 5,
								marginVertical: 8,
								borderRadius: 10
							}}
						>
							<Text style={{ color: 'white' }}>DAY 2</Text>
						</View>
					</View>

					<View
						style={{
							width: 130,
							height: 80,
							elevation: 10,
							backgroundColor: 'white',
							marginHorizontal: 5,
							marginVertical: 8,
							borderRadius: 10
						}}
					>
						<View
							style={{
								width: 130,
								height: 80,
								elevation: 10,
								backgroundColor: 'white',
								marginHorizontal: 5,
								marginVertical: 8,
								borderRadius: 10
							}}
						>
							<Text style={{ color: 'white' }}>DAY 3</Text>
						</View>
						<View
							style={{
								width: 130,
								height: 80,
								elevation: 10,
								backgroundColor: 'white',
								marginHorizontal: 5,
								marginVertical: 8,
								borderRadius: 10
							}}
						>
							<Text style={{ color: 'white' }}>DAY 4</Text>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export default Setup;
