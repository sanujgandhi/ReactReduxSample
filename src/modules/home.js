import React, { Component } from 'react';
import { Card ,Typography, CardContent, } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { fetchAllServices } from './services/actions/services';
import { fetchAllProviders } from './providers/actions/providers';
import ProviderCard from './providers/component/providers';



class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectId: null,
      selectedProvider: null
    }
    this.showSelectedComponent = this.showSelectedComponent.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllServices();
    this.props.fetchAllProviders();
  }

  showSelectedComponent(id) {
    this.setState({
      selectedServiceId: id,
    });
  }

  showSelectedProvider(provider) {
    this.setState({
      selectedProvider: provider,
      selectedProviderId: provider.id,
    });
  }
  
  render() {
    const { selectedProviderId, selectedServiceId } = this.state;
    return (
        <Box width='80%' display='flex' flexDirection='row' margin='10%'>
        <Box display='inline' width='30%'>
          <Box display='block'>
              <Card variant="outlined">
                  <CardContent>
                  <h2>Services</h2>
                  {this.props.services && this.props.services.map((service, index) => (
                        <Typography variant="body2" component="p" onClick={() => this.showSelectedComponent(service.id)} 
                        variant={service.id === selectedServiceId ? 'h6' : ''}>
                          <strong>{index + 1}.</strong> {service.attributes.name}
                        </Typography>
                      ))}
                  </CardContent>
              </Card>
          </Box>
          <Box display='block'>
              <Card variant="outlined">
                  <CardContent>
                    <h2>Providers</h2>
                    {this.props.providers && this.props.providers.map((provider, index) => (
                        <Typography variant="body2" component="p" onClick={() => this.showSelectedProvider(provider)} 
                        variant={provider.id === selectedProviderId ? 'h6' : ''}>
                          <strong>{index + 1}.</strong> {provider.attributes.name}
                        </Typography>
                      ))}
                  </CardContent>
              </Card>
          </Box>
        </Box>
        <Box display='inline' width='70%'>
            <ProviderCard provider={this.state.selectedProvider} />
        </Box>
        </Box>
    );
  }
}

  const mapStateToProps = state => ({
    services: state.service.services,
    providers: state.provider.providers
  });
  
  const mapDispatchToProps = {
    fetchAllProviders,
    fetchAllServices
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Home);