import styled from 'styled-components';
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Featured = () => {
    return (
        <Wrapper>
            <div className='featured'>
                <div className="top">
                    <h1 className="title">Total Revenue</h1>
                    <MoreVertIcon fontsize="small" />
                </div>
                <div className="bottom"></div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 2;
    .featured{
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
        padding: 10px;

        .top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color:gray;
            .title{
                font-style: 16px;
                font-weight:500;
            }
        }
    }
`

export default Featured