import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  todoList: {
    marginStart: 10,
    marginEnd: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  fabText: {
    color: Colors.white,
    fontSize: 35,
    alignSelf: 'center',
  },
  addTaskText: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 14,
    alignSelf: 'center',
  },
  toDoItemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    margin: 10,
  },
  doneItemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.green,
    borderRadius: 10,
    margin: 10,
  },
  toDoItemTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  toDoItemDesc: {
    color: Colors.white,
    fontSize: 15,
    marginTop: 10,
    marginEnd: 5,
  },
  doneButton: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
  },
  doneButtonContainer: {
    alignSelf: 'center',
  },
  addTaskButton: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    height: 35,
    width: 100,
  },
  addToDoContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 20,
  },
  titleInput: {
    height: 40,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  descInput: {
    marginTop: 20,
    marginBottom: 20,
    height: 35,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
});
