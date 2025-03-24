import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from './Profile/PageHeader';
import { PageTitle } from './components/PageTitle';
import AccountDetails from './Profile/AccountDetails';

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      {/* Header Section */}
      <PageHeader />

      {/* Page Title */}
      <PageTitle title='Mi Cuenta' />

      {/* Account Details */}
      <AccountDetails />
    </SafeAreaView>
  );
} 