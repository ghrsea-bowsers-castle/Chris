import React from 'react';
import { shallow, mount, render} from 'enzyme';

import testData from './sampleData'
import App from './index';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper =  shallow(<App />);
    expect(wrapper).toBeDefined();
   });
});

describe('should populate with props appropriately', () => {
  it('should call the database upon being mounted', () => {
    let wrapper = mount(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'loadAllReviews');
    expect(instance.loadAllReviews.toHaveBeenCalled);
  })
  const wrapper = mount(<App />)
  wrapper.setState({
    reviews: testData.reviews,
    totalReviews: testData.reviewCount
  })
  wrapper.update();
  it('should populate total number of reviews', ()=> {
    const reviewCount = wrapper.find('.reviews-overview');
    expect(reviewCount.text()).not.toEqual('0 Reviews');
  })
  it('should populate only 10 reviews at a time', ()=> {
    const listOfReviews = wrapper.find('.review-container');
    expect(listOfReviews).toHaveLength(10);
  })
  it('should render an overall rating', () => {
    const overview = wrapper.find('.reviews-overview');
    const overallRatingContainer = overview.find('.rating-container');
    const overallStars = overallRatingContainer.find('.star-ratings'); 
    expect(overallStars.length).toBeGreaterThanOrEqual(1)
  })
})

describe('it should handle a search appropriately', () => {
  it('should load with a blank state for search', () => {
    let wrapper = mount(<App />);
    expect(wrapper.state('termSearched')).to
  })
})