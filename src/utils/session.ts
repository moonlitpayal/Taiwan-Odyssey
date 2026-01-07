export const getSessionId = (): string => {
    const STORAGE_KEY = 'tw_odyssey_device_id';
    let deviceId = localStorage.getItem(STORAGE_KEY);

    if (!deviceId) {
        // Generate a new UUID for this device
        deviceId = crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, deviceId);
    }

    return deviceId;
};
