import styled from 'styled-components';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Page A',
            Total: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            Total: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            Total: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            Total: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            Total: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            Total: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            Total: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <Wrapper>
            <div className='chart'>
                <ResponsiveContainer width="100%" aspect={2 / 0.96}>
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="gray" />
                        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Total"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#total)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex: 4;
    .chart{
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
    }
  .title {
    margin-bottom: 20px;
  }

  .chartGrid {
    stroke: rgb(228, 225, 225);
  }
`

export default Chart