import react from 'react';
import { Calendar, Select, Radio, Col, Row, Typography } from 'antd';

function onPanelChange(value, mode) {
    console.log(value, mode);
}

function Date({ exam }) {
    return (
        <div>
            <div className='w-300 br-white-1'>
                <Calendar
                    fullscreen={false}
                    headerRender={({ value, type, onChange, onTypeChange }) => {
                        const start = 0;
                        const end = 12;
                        const monthOptions = [];

                        const current = value.clone();
                        const localeData = value.localeData();
                        const months = [];
                        for (let i = 0; i < 12; i++) {
                            current.month(i);
                            months.push(localeData.monthsShort(current));
                        }

                        for (let index = start; index < end; index++) {
                            monthOptions.push(
                                <Select.Option
                                    className='month-item'
                                    key={`${index}`}
                                >
                                    {months[index]}
                                </Select.Option>
                            );
                        }
                        const month = value.month();

                        const year = value.year();
                        const options = [];
                        for (let i = year - 10; i < year + 10; i += 1) {
                            options.push(
                                <Select.Option
                                    key={i}
                                    value={i}
                                    className='year-item'
                                >
                                    {i}
                                </Select.Option>
                            );
                        }
                        return (
                            <div style={{ padding: 8 }}>
                                <Typography.Title level={4}>
                                    {exam}
                                </Typography.Title>
                                <Row gutter={8}>
                                    <Col>
                                        <Select
                                            size='small'
                                            dropdownMatchSelectWidth={false}
                                            value={String(month)}
                                            onChange={(selectedMonth) => {
                                                const newValue = value.clone();
                                                newValue.month(
                                                    parseInt(selectedMonth, 10)
                                                );
                                                onChange(newValue);
                                            }}
                                            bordered={false}
                                        >
                                            {monthOptions}
                                        </Select>
                                    </Col>
                                    <Col>
                                        <Select
                                            size='small'
                                            dropdownMatchSelectWidth={false}
                                            className='my-year-select'
                                            onChange={(newYear) => {
                                                const now = value
                                                    .clone()
                                                    .year(newYear);
                                                onChange(now);
                                            }}
                                            value={String(year)}
                                            bordered={false}
                                        >
                                            {options}
                                        </Select>
                                    </Col>
                                </Row>
                            </div>
                        );
                    }}
                    onPanelChange={onPanelChange}
                />
            </div>
        </div>
    );
}

export default Date;