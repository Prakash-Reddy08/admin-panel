import styled from 'styled-components';
import Datatable from '../../components/Datatable';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const List = () => {
    return (
        <Wrapper>

            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <Datatable />
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
.list{
  display: flex;
  width: 100%;
  .listContainer {
    flex: 6;
  }
}
`
export default List