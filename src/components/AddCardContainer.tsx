import {connect} from "react-redux"
import {getTodos, postTodos, showEditItem, closePressed, setShowForm, setTextData, setEditData, editItem} from "redux2/actions/index"
import { RootState} from "redux2/index"
import AddCard from "components/AddCard"


const stateToProps = (state:RootState) =>{
    return{
      data: state.todos.data,
      newItem: state.postTodo,
      showForm: state.showForm,
      textData: state.textData,
      editData: state.editData

    } 
  }
  const mapDispatchToProps = {
      getTodos,
      postTodos,
      showEditItem,
      closePressed,
      setShowForm,
      setTextData,
      setEditData,
      editItem
  }
  export default connect(stateToProps, mapDispatchToProps)(AddCard);