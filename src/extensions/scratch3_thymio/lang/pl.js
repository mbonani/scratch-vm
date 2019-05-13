module.exports = {
    blocks: {
        setMotor: '[M] prêdkoœæ silnika [N]',
        stopMotors: 'zatrzymaj silniki',
        move: 'jedŸ[N]',
        moveWithSpeed: 'jedŸ[N] z prêdkoœci¹ [S]',
        moveWithTime: 'jedŸ[N] przez [S]s',
        turn: 'skrêæ [N]',
        turnWithSpeed: 'skrêæ [N] z prêdkoœci¹ [S]',
        turnWithTime: 'skrêcaj [N] przez [S]s',
        arc: 'jedŸ po okrêgu o promieniu [R] k¹t [A]',
        setOdomoter: 'wspó³rzêdne licznika [N] x: [O] y: [P]',
        leds: 'diody LED [L] R: [R] G: [G] B: [B]',
        setLeds: 'ustaw [L] diody LED na kolor [C]',
        changeLeds: 'zmieñ [L] diody LED na kolor poprzez [C]',
        clearLeds: 'wy³¹cz diody LED',
        nextDial: 'nastêpna dioda LED na okrêgu po stronie [L]',
        ledsCircle: 'diody LED na okrêgu [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxH: 'diody LED poziomych czujników zbli¿eniowych [A] [B] [C] [D] [E] [F] [G] [H]',
        ledsProxV: 'diody LED czujników pod³o¿a [A] [B]',
        ledsButtons: 'diody LED przycisków [A] [B] [C] [D]',
        ledsTemperature: 'temperatura diod LED R: [A] B: [B]',
        ledsRc: 'dioda LED zdalnego sterowania [A]',
        ledsSound: 'dioda LED mikrofonu [A]',
        soundSystem: 'odtwórz dŸwiêk systemowy [S]',
        soundFreq: 'odtwórz notatkê z czêstotliwoœci¹ [N]Hz przez [S]s',
        soundPlaySd: 'odtwórz dŸwiêk z karty SD [N]',
        soundRecord: 'nagrywanie dŸwiêku [N]',
        stopSoundRecord: 'zatrzymaj nagrywanie dŸwiêku',
        soundReplay: 'powtórz dŸwiêk [N]',
        whenButton: 'kiedy przycisk [B] naciœniêty',
        touching: 'gdy obiekt wykryty [S]',
        notouching: 'gdy nie wykryto obiektu [S]',
        touchingThreshold: 'gdy obiekt wykryty [S] [N]',
        bump: 'gdy zostanie wykryty wstrz¹s',
        soundDetected: 'gdy zostanie wykryty dŸwiêk',
        valButton: 'przycisk [B]',
        proximity: 'poziomy czujnik zbli¿eniowy [N]',
        proxHorizontal: 'wyœwietl wszystkie poziome czujniki zbli¿eniowe',
        ground: 'czujnik pod³o¿a [N]',
        proxGroundDelta: 'wyœwietl wszystkie czujniki pod³o¿a',
        distance: 'dystans [S]',
        angle: 'k¹t [S]',
        tilt: 'nachylenie na [T]',
        micIntensity: 'natê¿enie dŸwiêku',
        odometer: 'licznik [O]',
        motor: 'prêdkoœæ silnika [M]'
    },
    menus: {
        leftrightall: {
            left: 'lewy',
            right: 'prawy',
            all: 'wszystkie'
        },
        leftright: {
            left: 'lewy',
            right: 'prawy'
        },
        sensors: {
            front: 'przedni',
            back: 'tylny',
            ground: 'dolny'
        },
        sensors2: {
            left: 'lewy',
            front: 'przedni',
            right: 'prawy',
            back: 'tylny',
            ground: 'dolny'
        },
        proxsensors: {
            front_far_left: 'lewy',
            front_left: 'centralny lewy',
            front_center: 'centralny',
            front_right: 'centralny prawy',
            front_far_right: 'prawy',
            back_left: 'tylny lewy',
            back_right: 'tylny prawy'
        },
        horizontalSensors: {
            front_far_left: 'lewy',
            front_left: 'centralny lewy',
            front_center: 'centralny',
            front_right: 'centralny prawy',
            front_far_right: 'prawy',
            back_left: 'tylny lewy',
            back_right: 'tylny prawy'
        },
        groundSensors: {
            left: 'lewy',
            right: 'prawy'
        },
        light: {
            all: 'wszystkie',
            top: 'górne',
            bottom: 'dolne',
            bottom_left: 'dolne lewe',
            bottom_right: 'dolne prawe'
        },
        angles: {
            front: 'przedni',
            back: 'tylny',
            ground: 'dolny'
        },
        odo: {
            direction: 'kierunek',
            x: 'x',
            y: 'y'
        },
        tilts: {
            front_back: 'przód-ty³',
            top_bottom: 'góra-dó³',
            left_right: 'lewo-prawo'
        },
        buttons: {
            center: 'œrodkowy',
            front: 'naprzód',
            back: 'do ty³u',
            left: 'w lewo',
            right: 'w prawo'
        },
        nearfar: {
            near: 'blisko',
            far: 'daleko'
        }
    }
};
