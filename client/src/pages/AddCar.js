import { Col, Row, Form, Input, Select } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner';
import { addCar } from '../redux/actions/carsActions';

const { Option } = Select;

function AddCar() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    values.bookedTimeSlots = [];
    dispatch(addCar(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify='center' className='mt-5'>
        <Col lg={12} sm={24} xs={24} className='p-2'>
          <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
            <h3>Add New Car/Bike</h3>
            <hr />
            <Form.Item name='type' label='Type' rules={[{ required: true }]}>
              <Select>
                <Option value='car'>Car</Option>
                <Option value='bike'>Bike</Option>
              </Select>
            </Form.Item>
            <Form.Item name='name' label='Car/Bike Name' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='image' label='Image URL' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='rentPerHour' label='Rent Per Hour' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='capacity' label='Capacity' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='fuelType' label='Fuel Type' rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <div className='text-right'>
              <button className='btn1'>ADD CAR/BIKE</button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default AddCar;
