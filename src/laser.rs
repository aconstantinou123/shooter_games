use wasm_bindgen::prelude::*;
use crate::utils;
use crate::player_ship::PlayerShip;
use std::f64;

extern crate web_sys;

#[allow(unused_macros)]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Laser {
    radians: f64,
    x: f64,
    y: f64,
    is_active: bool,
    shoot_timer: i32,
    can_shoot: bool,
    speed: f64,
}


#[wasm_bindgen]
impl Laser {

    pub fn new(radians: f64, x: f64, y: f64) -> Laser {
        utils::set_panic_hook();
        Laser {
            radians,
            x,
            y,
            is_active: false,
            shoot_timer: 0,
            can_shoot: false,
            speed: 10.0,
        }
    }

    pub fn get_x(&self) -> f64 {
        self.x
    }

    pub fn get_y(&self) -> f64 {
        self.y
    }

    pub fn get_shoot_timer(&self) -> i32 {
        self.shoot_timer
    }

    pub fn get_can_shoot(&self) -> bool {
        self.can_shoot
    }

    pub fn set_can_shoot(&mut self, can_shoot: bool) {
        self.can_shoot = can_shoot
    }

    pub fn get_radians(&self) -> f64 {
        self.radians
    }

    pub fn reset_radians(&mut self) {
        self.radians = 0.0
    }

    pub fn delay_shot(&mut self, player_ship: &PlayerShip) {
        if self.shoot_timer <= 500 && self.can_shoot == false {
            self.shoot_timer += 1
        } else if self.shoot_timer <= 0 {
            self.can_shoot = false;
            self.shoot_timer += 1
        } else {
            self.can_shoot = true;
            self.shoot_timer -= 1;
            if self.shoot_timer == 250 {
                self.set_ship_postion(player_ship)
            }
            if self.radians != 0.0  {
                self.shoot_laser()
            }
        }
    }

    pub fn align_with_enemy_position(&mut self, x: f64, y: f64) {
        self.x = x;
        self.y = y;
    }

    fn set_ship_postion(&mut self, player_ship: &PlayerShip) {
        let delta_x = player_ship.get_centre_x() as f64 - self.x;
        let delta_y = player_ship.get_centre_y() as f64 - self.y;
        self.radians = delta_y.atan2(delta_x);
    }

    fn shoot_laser(&mut self) {
        self.x += self.radians.cos() * self.speed;
        self.y += self.radians.sin() * self.speed;
    }
}
