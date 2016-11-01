//Make calls to remote services.

export async function fetchMyRemoteResource() {
    await delay(100);
    return { success: true, data: 42 };
}

function delay(ms: number) {
    return new Promise<{}>((res, rej) => setTimeout(res, ms));
}
