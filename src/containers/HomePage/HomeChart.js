import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { format, subDays } from 'date-fns';

const data = [];

for (let i = 13; i > 0; i -= 1) {
  data.push({
    date: format(subDays(new Date(), i), 'MMM dd'),
    // fullDate: format(subDays(new Date(), i), 'EEEE,MMMM dd, yyyy'),
    // transactions: 900 + Math.ceil(Math.random() * 100),
    transactions: 0,
  });
}

function HomeChart({ width, height }) {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 0, right: 10, bottom: 0, left: -32 }}
    >
      <Line
        dot={false}
        strokeWidth={2}
        type="monotone"
        dataKey="transactions"
        stroke="#1273ea"
      />
      <XAxis
        dataKey="date"
        tick={{ fontSize: 10 }}
        axisLine={false}
        tickLine={false}
        padding={{ left: 6 }}
      />
      <YAxis
        dataKey="transactions"
        domain={[0, 200]}
        padding={{ top: 10 }}
        tick={{ fontSize: 10 }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        cursor={{ strokeWidth: 0 }}
        labelStyle={{ fontSize: 10 }}
        itemStyle={{
          fontSize: 12,
          padding: '0px',
          color: 'rgba(31, 41, 55)',
        }}
        viewBox={{ className: 'rounded-lg' }}
      />
    </LineChart>
  );
}

HomeChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeChart);
