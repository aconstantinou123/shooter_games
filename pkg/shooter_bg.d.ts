/* tslint:disable */
export const memory: WebAssembly.Memory;
export function __wbindgen_global_argument_ptr(): number;
export function __wbg_enemy_free(a: number): void;
export function enemy_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function enemy_set_size(a: number, b: number): void;
export function enemy_get_added_to_array(a: number): number;
export function enemy_set_add_to_array(a: number): void;
export function enemy_remove_enemy_from_array(a: number): void;
export function enemy_get_size(a: number): number;
export function enemy_get_enemy_type(a: number): number;
export function enemy_get_x(a: number): number;
export function enemy_get_y(a: number): number;
export function enemy_set_x(a: number, b: number): void;
export function enemy_set_y(a: number, b: number): void;
export function enemy_increment_y(a: number, b: number): void;
export function enemy_increment_x(a: number, b: number): void;
export function enemy_get_x_speed(a: number): number;
export function enemy_get_y_speed(a: number): number;
export function enemy_reverse_x_speed(a: number): void;
export function enemy_reverse_y_speed(a: number): void;
export function enemy_set_x_speed(a: number, b: number): void;
export function enemy_set_y_speed(a: number, b: number): void;
export function enemy_is_active(a: number): number;
export function enemy_set_active(a: number): void;
export function enemy_set_ready_to_remove(a: number): void;
export function enemy_set_ready_to_remove_false(a: number): void;
export function enemy_get_is_ready_to_remove(a: number): number;
export function enemy_move_enemy(a: number): void;
export function enemy_check_dead(a: number, b: number): void;
export function enemy_check_player_ship_collision(a: number, b: number): void;
export function enemy_check_shockwave_collision(a: number, b: number): void;
export function enemy_blow_up(a: number, b: number, c: number): void;
export function enemy_move_and_reactivate(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function enemy_change_speed(a: number, b: number, c: number): void;
export function enemy_can_draw(a: number, b: number, c: number, d: number): number;
export function draw_player_ship(a: number, b: number): void;
export function draw_projectile(a: number, b: number, c: number): void;
export function draw_star(a: number, b: number, c: number): void;
export function draw_shockwave(a: number, b: number, c: number): void;
export function draw_power_up(a: number, b: number): void;
export function draw_spiral_enemy(a: number, b: number, c: number): void;
export function draw_square_enemy(a: number, b: number, c: number): void;
export function draw_enemy_projectile(a: number, b: number, c: number): void;
export function draw_basic_enemy(a: number, b: number, c: number): void;
export function draw_follow_enemy(a: number, b: number, c: number): void;
export function draw_claw_enemy(a: number, b: number, c: number): void;
export function draw_outline(a: number, b: number, c: number): void;
export function draw_offscreen_canvas(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function __wbg_laser_free(a: number): void;
export function laser_new(a: number, b: number, c: number): number;
export function laser_get_x(a: number): number;
export function laser_get_y(a: number): number;
export function laser_get_shoot_timer(a: number): number;
export function laser_get_can_shoot(a: number): number;
export function laser_set_can_shoot(a: number, b: number): void;
export function laser_get_radians(a: number): number;
export function laser_reset_radians(a: number): void;
export function laser_check_laser_hit(a: number, b: number): void;
export function laser_delay_shot(a: number, b: number): void;
export function laser_align_with_enemy_position(a: number, b: number, c: number): void;
export function __wbg_basicenemy_free(a: number): void;
export function __wbg_get_basicenemy_base(a: number): number;
export function __wbg_set_basicenemy_base(a: number, b: number): void;
export function basicenemy_new(a: number, b: number): number;
export function basicenemy_check_dead(a: number, b: number): void;
export function basicenemy_blow_up(a: number, b: number, c: number): void;
export function basicenemy_move_enemy(a: number): void;
export function basicenemy_check_player_ship_collision(a: number, b: number): void;
export function basicenemy_check_shockwave_collision(a: number, b: number): void;
export function basicenemy_change_speed(a: number, b: number, c: number): void;
export function basicenemy_get_base(a: number): number;
export function basicenemy_set_active(a: number): void;
export function basicenemy_is_active(a: number): number;
export function basicenemy_get_added_to_array(a: number): number;
export function basicenemy_set_add_to_array(a: number): void;
export function basicenemy_remove_enemy_from_array(a: number): void;
export function basicenemy_set_ready_to_remove_false(a: number): void;
export function basicenemy_update(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_projectile_free(a: number): void;
export function projectile_new(a: number, b: number, c: number): number;
export function projectile_get_x(a: number): number;
export function projectile_get_y(a: number): number;
export function projectile_get_speed(a: number): number;
export function projectile_get_initial_angle(a: number): number;
export function projectile_calculate_new_x(a: number): void;
export function projectile_calculate_new_y(a: number): void;
export function projectile_is_active(a: number): number;
export function projectile_set_active(a: number): void;
export function projectile_set_x(a: number, b: number): void;
export function projectile_set_y(a: number, b: number): void;
export function projectile_reset_state(a: number, b: number, c: number, d: number): void;
export function projectile_can_draw(a: number, b: number, c: number, d: number): number;
export function __wbg_star_free(a: number): void;
export function star_new(a: number, b: number): number;
export function star_get_x(a: number): number;
export function star_get_y(a: number): number;
export function star_set_x(a: number, b: number): void;
export function star_set_radians(a: number): void;
export function star_set_y(a: number, b: number): void;
export function star_calculate_new_x(a: number): void;
export function star_calculate_new_y(a: number): void;
export function star_is_active(a: number): number;
export function star_set_active(a: number): void;
export function star_can_draw(a: number, b: number, c: number, d: number): number;
export function __wbg_playership_free(a: number): void;
export function __wbg_get_playership_shockwave(a: number): number;
export function __wbg_set_playership_shockwave(a: number, b: number): void;
export function playership_new(a: number, b: number): number;
export function playership_get_power_up(a: number, b: number): void;
export function playership_get_color(a: number): number;
export function playership_set_color(a: number, b: number): void;
export function playership_set_power_up(a: number, b: number): void;
export function playership_get_score(a: number): number;
export function playership_set_score(a: number, b: number): void;
export function playership_get_is_alive(a: number): number;
export function playership_set_is_alive(a: number): void;
export function playership_get_health(a: number): number;
export function playership_set_health(a: number, b: number): void;
export function playership_get_speed(a: number): number;
export function playership_get_side_count(a: number): number;
export function playership_get_size(a: number): number;
export function playership_get_rotation_degrees(a: number): number;
export function playership_get_centre_x(a: number): number;
export function playership_get_centre_y(a: number): number;
export function playership_get_radians(a: number): number;
export function playership_increment_centre_x(a: number, b: number): void;
export function playership_set_centre_x(a: number, b: number): void;
export function playership_set_centre_y(a: number, b: number): void;
export function playership_increment_centre_y(a: number, b: number): void;
export function playership_increment_rotation_degrees(a: number, b: number): void;
export function playership_generate_new_x(a: number): number;
export function playership_generate_new_y(a: number): number;
export function playership_draw_line_x(a: number, b: number): number;
export function playership_draw_line_y(a: number, b: number): number;
export function playership_check_is_dead(a: number): void;
export function playership_activate_shockwave(a: number): void;
export function playership_detonate(a: number, b: number): void;
export function __wbg_squareenemy_free(a: number): void;
export function __wbg_get_squareenemy_base(a: number): number;
export function __wbg_set_squareenemy_base(a: number, b: number): void;
export function squareenemy_new(a: number, b: number): number;
export function squareenemy_get_can_shoot(a: number): number;
export function squareenemy_get_laser_x(a: number): number;
export function squareenemy_get_laser_y(a: number): number;
export function squareenemy_move_enemy(a: number, b: number, c: number, d: number): void;
export function squareenemy_patrol_edges(a: number, b: number, c: number): void;
export function squareenemy_move_to_position(a: number, b: number, c: number): void;
export function squareenemy_check_dead(a: number, b: number): void;
export function squareenemy_blow_up(a: number, b: number, c: number): void;
export function squareenemy_check_player_ship_collision(a: number, b: number): void;
export function squareenemy_check_shockwave_collision(a: number, b: number): void;
export function squareenemy_change_speed(a: number, b: number, c: number): void;
export function squareenemy_get_added_to_array(a: number): number;
export function squareenemy_set_add_to_array(a: number): void;
export function squareenemy_remove_enemy_from_array(a: number): void;
export function squareenemy_update(a: number, b: number, c: number, d: number, e: number): void;
export function squareenemy_set_ready_to_remove_false(a: number): void;
export function __wbg_clawenemy_free(a: number): void;
export function __wbg_get_clawenemy_base(a: number): number;
export function __wbg_set_clawenemy_base(a: number, b: number): void;
export function clawenemy_new(a: number, b: number): number;
export function clawenemy_get_radians(a: number): number;
export function clawenemy_get_number_of_sides(a: number): number;
export function clawenemy_move_enemy(a: number, b: number): void;
export function clawenemy_check_dead(a: number, b: number): void;
export function clawenemy_avoid_projectile(a: number, b: number): void;
export function clawenemy_blow_up(a: number, b: number, c: number): void;
export function clawenemy_check_player_ship_collision(a: number, b: number): void;
export function clawenemy_x_draw_position(a: number): number;
export function clawenemy_y_draw_position(a: number): number;
export function clawenemy_draw_x(a: number, b: number): number;
export function clawenemy_draw_y(a: number, b: number): number;
export function clawenemy_check_shockwave_collision(a: number, b: number): void;
export function clawenemy_change_speed(a: number, b: number, c: number): void;
export function clawenemy_get_added_to_array(a: number): number;
export function clawenemy_set_add_to_array(a: number): void;
export function clawenemy_remove_enemy_from_array(a: number): void;
export function clawenemy_set_ready_to_remove_false(a: number): void;
export function clawenemy_update(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_followenemy_free(a: number): void;
export function __wbg_get_followenemy_base(a: number): number;
export function __wbg_set_followenemy_base(a: number, b: number): void;
export function followenemy_new(a: number, b: number): number;
export function followenemy_get_number_of_sides(a: number): number;
export function followenemy_get_radians(a: number): number;
export function followenemy_move_enemy(a: number, b: number): void;
export function followenemy_check_dead(a: number, b: number): void;
export function followenemy_blow_up(a: number, b: number, c: number): void;
export function followenemy_check_player_ship_collision(a: number, b: number): void;
export function followenemy_x_draw_position(a: number): number;
export function followenemy_y_draw_position(a: number): number;
export function followenemy_draw_x(a: number, b: number): number;
export function followenemy_draw_y(a: number, b: number): number;
export function followenemy_check_shockwave_collision(a: number, b: number): void;
export function followenemy_change_speed(a: number, b: number, c: number): void;
export function followenemy_get_added_to_array(a: number): number;
export function followenemy_set_add_to_array(a: number): void;
export function followenemy_remove_enemy_from_array(a: number): void;
export function followenemy_set_ready_to_remove_false(a: number): void;
export function followenemy_update(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_space_free(a: number): void;
export function space_new(a: number, b: number): number;
export function space_get_intensity_level(a: number): number;
export function space_increment_intensity_level(a: number): void;
export function space_reset_intensity_level(a: number): void;
export function space_get_height(a: number): number;
export function space_get_width(a: number): number;
export function space_check_star_out_of_bounds(a: number, b: number): void;
export function space_check_projectile_out_of_bounds(a: number, b: number): void;
export function space_check_player_ship_out_of_bounds(a: number, b: number): void;
export function space_check_enemy_at_edge(a: number, b: number): void;
export function space_check_claw_enemy_at_edge(a: number, b: number): void;
export function space_check_spiral_enemy_at_edge(a: number, b: number): void;
export function space_check_basic_enemy_at_edge(a: number, b: number): void;
export function __wbg_shockwave_free(a: number): void;
export function shockwave_new(a: number, b: number): number;
export function shockwave_get_x(a: number): number;
export function shockwave_get_y(a: number): number;
export function shockwave_get_height(a: number): number;
export function shockwave_get_width(a: number): number;
export function shockwave_get_is_active(a: number): number;
export function shockwave_get_shockwaves_remaining(a: number): number;
export function shockwave_activate_shockwave(a: number, b: number, c: number): void;
export function shockwave_detonate(a: number, b: number): void;
export function __wbg_spiralenemy_free(a: number): void;
export function __wbg_get_spiralenemy_base(a: number): number;
export function __wbg_set_spiralenemy_base(a: number, b: number): void;
export function spiralenemy_new(a: number, b: number): number;
export function spiralenemy_get_radians(a: number): number;
export function spiralenemy_check_dead(a: number, b: number): void;
export function spiralenemy_blow_up(a: number, b: number, c: number): void;
export function spiralenemy_spiral_movement(a: number): void;
export function spiralenemy_check_player_ship_collision(a: number, b: number): void;
export function spiralenemy_check_shockwave_collision(a: number, b: number): void;
export function spiralenemy_change_speed(a: number, b: number, c: number): void;
export function spiralenemy_get_added_to_array(a: number): number;
export function spiralenemy_set_add_to_array(a: number): void;
export function spiralenemy_set_x(a: number, b: number): void;
export function spiralenemy_set_y(a: number, b: number): void;
export function spiralenemy_set_active(a: number): void;
export function spiralenemy_set_speed(a: number, b: number): void;
export function spiralenemy_remove_enemy_from_array(a: number): void;
export function spiralenemy_set_ready_to_remove_false(a: number): void;
export function spiralenemy_update(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_powerup_free(a: number): void;
export function powerup_new(): number;
export function powerup_get_color_1(a: number): number;
export function powerup_get_color_2(a: number): number;
export function powerup_get_color_3(a: number): number;
export function powerup_get_x(a: number): number;
export function powerup_get_y(a: number): number;
export function powerup_get_is_active(a: number): number;
export function powerup_get_timer(a: number): number;
export function powerup_get_size(a: number): number;
export function powerup_generate_random_position(a: number, b: number): void;
export function powerup_power_up_countdown(a: number, b: number): void;
export function powerup_check_collision_with_player_ship(a: number, b: number): void;
export function powerup_change_colors(a: number): void;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
