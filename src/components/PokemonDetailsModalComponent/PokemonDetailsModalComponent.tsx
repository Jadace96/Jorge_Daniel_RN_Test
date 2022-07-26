// vendors
import React from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// components
import { PokemonBox } from '../PokemonBoxComponent';

// styles
import { styles } from './PokemonDetailsModalComponentStyles';

// types
import { PokemonDataMapped } from '../../types';

// types
type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	data: PokemonDataMapped;
};

export const PokemonDetailsModal = ({
	data,
	onClose,
	isVisible = false,
}: ModalProps) => {
	return (
		<Modal
			transparent
			visible={isVisible}
			animationType="slide"
			onRequestClose={onClose}>
			<AntDesign
				size={30}
				name="close"
				color="black"
				onPress={onClose}
				style={styles.closeIcon}
			/>
			<PokemonBox pokemonData={data} showFullDetails />
		</Modal>
	);
};
