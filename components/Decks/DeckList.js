import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

const DeckList = ({ items, actionOnItem }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={actionOnItem}
    />
  );
}

const mapStateToProps = state => (
  { items: state.decks }
)

export default connect(mapStateToProps, null)(DeckList);