import PropTypes from 'prop-types';
import {
    StatisticsSection,
    Title,
    List,
    Item,
    Label,
    Value,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}
            <List>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}
                        </Label>
                        <Value>{percentage}%
                        </Value>
                    </Item>     
                 ))}
    </List>
   </StatisticsSection>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};