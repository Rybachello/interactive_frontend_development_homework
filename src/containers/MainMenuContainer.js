import {connect} from 'react-redux';
import AppMenuHeader from '../components/AppMenuHeader';

const mapStateToProps = (state) => ({
  status: state.connection.status
});
export default connect(mapStateToProps, undefined)(AppMenuHeader);
